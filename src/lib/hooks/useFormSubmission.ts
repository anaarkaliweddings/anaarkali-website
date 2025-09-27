'use client'

import { useState } from 'react'
import { submitContactForm, submitConsultationBooking, ContactFormSubmission, ConsultationBooking } from '@/lib/supabase'

export interface FormSubmissionState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export function useContactFormSubmission() {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  })

  const submitForm = async (data: ContactFormSubmission) => {
    setState({ isSubmitting: true, isSuccess: false, error: null })

    try {
      const result = await submitContactForm(data)
      setState({ isSubmitting: false, isSuccess: true, error: null })
      return { success: true, data: result.data }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
      setState({ isSubmitting: false, isSuccess: false, error: errorMessage })
      return { success: false, error: errorMessage }
    }
  }

  const resetState = () => {
    setState({ isSubmitting: false, isSuccess: false, error: null })
  }

  return {
    ...state,
    submitForm,
    resetState
  }
}

export function useConsultationBookingSubmission() {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  })

  const submitBooking = async (data: ConsultationBooking) => {
    setState({ isSubmitting: true, isSuccess: false, error: null })

    try {
      const result = await submitConsultationBooking(data)
      setState({ isSubmitting: false, isSuccess: true, error: null })
      return { success: true, data: result.data }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
      setState({ isSubmitting: false, isSuccess: false, error: errorMessage })
      return { success: false, error: errorMessage }
    }
  }

  const resetState = () => {
    setState({ isSubmitting: false, isSuccess: false, error: null })
  }

  return {
    ...state,
    submitBooking,
    resetState
  }
}
