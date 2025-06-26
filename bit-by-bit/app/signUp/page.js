'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff} from "lucide-react"
import { useState } from "react"


export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    return(
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                    Enter your information below
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="name">Full Name</Label>
                                </div>
                                <Input id="password" type="password"  placeholder="Name" required />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="username">Username</Label>
                                </div>
                                <Input id="username" type="username"  placeholder="Username" required />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                 <div className="relative">
                                    <Input id="password" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20}/> }
                                    </button>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Re-enter Password</Label>
                                </div>
                                <div className="relative">
                                    <Input id="re-password" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20}/> }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                    Create Account
                    </Button>
                    <Button variant="outline" className="w-full">
                    Sign in with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}