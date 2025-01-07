'use server'
 
import { redirect } from 'next/navigation'
 
export async function navigateToHome() {
  console.log("NAVIGATING TO HOME")
  redirect(`/`)
}