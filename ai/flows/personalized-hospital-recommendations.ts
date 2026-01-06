'use server';

/**
 * @fileOverview Provides personalized hospital and treatment recommendations based on user medical history and preferences.
 *
 * - getPersonalizedRecommendations - A function that takes user medical history and preferences and returns personalized hospital and treatment recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  medicalHistory: z
    .string()
    .describe('Detailed medical history of the user, including past illnesses, surgeries, and current medications.'),
  preferences: z
    .string()
    .describe('User preferences for hospitals and treatments, such as location, price range, and specific medical interests.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of personalized hospital and treatment recommendations based on the user input.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI assistant that provides personalized hospital and treatment recommendations based on the user's medical history and preferences.

  Medical History: {{{medicalHistory}}}
  Preferences: {{{preferences}}}

  Based on the provided medical history and preferences, provide a detailed list of hospital and treatment recommendations. Be as specific as possible and take into account all provided information. Return the recommendations in a user friendly format.
  `,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
