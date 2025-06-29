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
import supabase from "@/lib/supabase"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()


        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })
        if(error){
            console.error("Sign up error: ", error)
            return
        }

        const user = data?.user
        if(user){
            await supabase.from("users").insert({
                id: user.id,
                full_name: fullName,
                username: username
                
            })
        }
        
        
        console.log("Sign up successful")
        

    }


    return(
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Create your account</CardTitle>
                        <CardDescription>
                        Enter your information below
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="name">Full Name</Label>
                                    </div>
                                    <Input id="password" type="text" value={fullName} placeholder="Name"  onChange={(e) => setFullName(e.target.value)} required />
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
                                    <Input id="username" type="text" value={username}  onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                    </div>
                                    <div className="relative">
                                        <Input id="password" value={password} type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
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
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Link href="/home" className="w-full">
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </Link>
                        {/* <Link>  */}
                            <Button variant="outline" className="w-full">
                                Sign in with Google
                            </Button>
                        {/* </Link> */}
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}