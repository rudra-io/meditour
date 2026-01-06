'use server';

import { z } from 'zod';
import { getPersonalizedRecommendations } from '@/ai/flows/personalized-hospital-recommendations';

const RecommendationSchema = z.object({
  medicalHistory: z.string().min(10, { message: 'Please provide a more detailed medical history.' }),
  preferences: z.string().min(10, { message: 'Please provide more details about your preferences.' }),
});

export type RecommendationFormState = {
  message: string | null;
  recommendations: string | null;
  errors: {
    medicalHistory?: string[];
    preferences?: string[];
  } | null;
  fieldValues: {
    medicalHistory: string;
    preferences: string;
  };
};

export async function getRecommendationsAction(
  prevState: RecommendationFormState,
  formData: FormData
): Promise<RecommendationFormState> {
  const medicalHistory = formData.get('medicalHistory') as string;
  const preferences = formData.get('preferences') as string;

  const validatedFields = RecommendationSchema.safeParse({
    medicalHistory,
    preferences,
  });

  const fieldValues = { medicalHistory, preferences };

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      recommendations: null,
      errors: validatedFields.error.flatten().fieldErrors,
      fieldValues,
    };
  }

  try {
    const result = await getPersonalizedRecommendations({
      medicalHistory: validatedFields.data.medicalHistory,
      preferences: validatedFields.data.preferences,
    });
    
    return {
      message: 'Success',
      recommendations: result.recommendations,
      errors: null,
      fieldValues: { medicalHistory: '', preferences: '' }, // Clear form on success
    };
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      recommendations: null,
      errors: null,
      fieldValues,
    };
  }
}
