import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Lock, User, ArrowRight } from "lucide-react";

type Mode = "signin" | "signup" | "forgot";

export default function Auth() {
  const { session, signIn, signUp, resetPassword } = useAuth();
  const { toast } = useToast();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  if (session) return <Navigate to="/" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signin") {
        await signIn(email, password);
        toast({ title: "Welcome back!", description: "You've signed in successfully." });
      } else if (mode === "signup") {
        const msg = await signUp(email, password, fullName);
        toast({ title: "Account created", description: msg });
        setMode("signin");
      } else {
        await resetPassword(email);
        toast({ title: "Reset email sent", description: "Check your inbox for a password reset link." });
        setMode("signin");
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const title = mode === "signin" ? "Sign In" : mode === "signup" ? "Create Account" : "Reset Password";
  const description = mode === "signin"
    ? "Enter your credentials to access the portal"
    : mode === "signup"
    ? "Fill in your details to get started"
    : "We'll send you a link to reset your password";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
            ET
          </div>
          <h1 className="text-xl font-semibold text-foreground">ETEC Management Portal</h1>
        </div>

        <Card className="border-border/60 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10"
                      required
                      maxLength={100}
                    />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                    maxLength={255}
                  />
                </div>
              </div>
              {mode !== "forgot" && (
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                      minLength={6}
                      maxLength={128}
                    />
                  </div>
                </div>
              )}
              {mode === "signin" && (
                <button
                  type="button"
                  onClick={() => setMode("forgot")}
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                {title}
              </Button>
              {mode === "signin" ? (
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button type="button" onClick={() => setMode("signup")} className="text-primary hover:underline font-medium">
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setMode("signin")} className="text-primary hover:underline font-medium">
                    Sign in
                  </button>
                </p>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
