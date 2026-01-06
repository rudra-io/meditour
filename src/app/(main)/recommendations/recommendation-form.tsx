'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getRecommendationsAction, RecommendationFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

const initialState: RecommendationFormState = {
  message: null,
  recommendations: null,
  errors: {},
  fieldValues: {
    medicalHistory: '',
    preferences: ''
  }
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Recommendations...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get AI Recommendations
        </>
      )}
    </Button>
  );
}

export function RecommendationForm() {
  const [state, formAction] = useFormState(getRecommendationsAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === 'Success') {
      formRef.current?.reset();
    }
  }, [state.message]);


  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <Card>
        <CardHeader>
          <CardTitle>Your Medical Details</CardTitle>
          <CardDescription>
            Provide your medical history and preferences so our AI can generate personalized recommendations.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} action={formAction}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="medicalHistory">Medical History</Label>
              <Textarea
                id="medicalHistory"
                name="medicalHistory"
                placeholder="e.g., Diagnosed with coronary artery disease in 2020. Had an appendectomy in 2015. Allergic to penicillin."
                rows={6}
                required
                defaultValue={state.fieldValues.medicalHistory}
              />
              {state.errors?.medicalHistory && (
                <p className="text-sm text-destructive">{state.errors.medicalHistory[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferences">Preferences & Requirements</Label>
              <Textarea
                id="preferences"
                name="preferences"
                placeholder="e.g., Looking for a hospital in Southeast Asia. Budget is around $15,000. Prefer a hospital with English-speaking staff and good post-operative care."
                rows={6}
                required
                defaultValue={state.fieldValues.preferences}
              />
              {state.errors?.preferences && (
                <p className="text-sm text-destructive">{state.errors.preferences[0]}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      <div className="space-y-4">
        {state.message && state.message !== 'Success' && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
        {state.recommendations ? (
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="text-accent" />
                Personalized Recommendations
              </CardTitle>
              <CardDescription>
                Based on your input, here are some suggested options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: state.recommendations.replace(/\n/g, '<br />') }}
              />
            </CardContent>
          </Card>
        ) : (
          <div className="flex h-full min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed bg-card p-8 text-center">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Awaiting Your Details</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Your AI-powered recommendations will appear here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
