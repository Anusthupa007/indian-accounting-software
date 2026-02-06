import { redirect } from 'next/navigation';

export default function LoginPage() {
  // Redirect to the new comprehensive auth page
  redirect('/auth');
}