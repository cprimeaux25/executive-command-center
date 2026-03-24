

# Secure Login Page Implementation

## Overview
Add Supabase-powered authentication with a login page, auth context provider, route protection, and password reset flow. The existing `profiles` table and `handle_new_user` trigger are already in place.

## Files to Create/Modify

### 1. `src/contexts/AuthContext.tsx` — Auth Provider
- React context wrapping the app with Supabase `onAuthStateChange` listener (set up BEFORE `getSession()`)
- Exposes `user`, `session`, `loading`, `signIn`, `signUp`, `signOut` functions
- Tracks auth state reactively

### 2. `src/pages/Auth.tsx` — Login/Signup Page
- Clean, professional login form matching the ETEC steel blue theme
- Toggle between Sign In and Sign Up modes
- Email + password fields with validation
- "Forgot Password?" link triggering `resetPasswordForEmail` with redirect to `/reset-password`
- Error/success toast messages
- Redirects to dashboard when already authenticated

### 3. `src/pages/ResetPassword.tsx` — Password Reset Page
- Checks for `type=recovery` in URL hash
- Form to enter and confirm new password
- Calls `supabase.auth.updateUser({ password })`
- Public route (not behind auth guard)

### 4. `src/components/ProtectedRoute.tsx` — Route Guard
- Wraps authenticated routes; redirects to `/auth` if no session
- Shows loading spinner while checking auth state

### 5. `src/App.tsx` — Route Updates
- Wrap all Layout routes inside `<ProtectedRoute>`
- Add public routes: `/auth` and `/reset-password`
- Wrap entire app in `<AuthProvider>`

### 6. `src/components/AppSidebar.tsx` — Logout Button
- Add sign-out button at bottom of sidebar with user email display

## Security Notes
- No RLS changes needed now — existing tables either have RLS or will be configured per-module later
- Auth uses Supabase's built-in email/password provider (already enabled by default)
- Session persisted in localStorage with auto-refresh

