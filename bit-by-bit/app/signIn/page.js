'use client'

import { useState } from "react"
// import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail } from "lucide-react"





export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  


  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <motion.div
        // initial={{opacity: 0, y:-20}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 0.5}}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Welcome back</h1>
            <p className="text-muted-foreground">Enter your information</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              
            </div>
            <div className="space-y-2">
              <Label htmlForm="password">Password</Label>
              <div className="relative"> 
                <Input id="password" value={password} type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20}/> }
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex item-center space-x-2">
                <Checkbox id="remember"/>
                <Label htmlFor="remember">Remember me</Label>
              </div>
                <a href="#" className="text-sm text-primary-500 hover:text-primary-600">Forgot password?</a>
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <Button variant="outline" className="w-full">
              <Mail className="mr-2 h-4 w-4"/>
              Google
            </Button>
          </div>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">
                Sign Up
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
