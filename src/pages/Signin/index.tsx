'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/hook/Auth'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

interface User {
  name: string;
  email: string;
  avatar_url?: string;
  role?: string;
}

export default function Signin() {
  const { signIn } = useAuth()
  const navigate = useNavigate();
  const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(6).max(12),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const {email, password} = values
    try {
      await signIn({email, password})
      const token = localStorage.getItem('@Hakuna:token')
      if(token) {
        const user = jwtDecode<User>(token)
        if (user.role === "admin") {
          navigate("/dashboard")
        } else {
          navigate("/")
        }
      }
      form.reset()
    } catch (err) {
      form.reset()
      return err
    }
  }

  return (
    <div className='flex items-center justify-center h-screen h-full w-full mx-auto border-solid border-2 border-zinc-500 '>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Informe seu email e senha de acesso.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="digite seu email..." type='email' {...field} />
                </FormControl>
                <FormDescription>
                  Informe seu e-mail.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="digite sua senha..." type='password' {...field} />
                </FormControl>
                <FormDescription>
                  Informe sua senha.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type='submit'>Entrar</Button>
        </CardFooter>
        </form>
      </Form>
    </Card>
    </div>
  )
}