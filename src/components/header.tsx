"use client"
import { useAuth } from "@/hook/Auth";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "./ui/dropdown-menu";
import logo from '@/assets/logoChacal.svg'
import { useNavigate } from "react-router-dom";
import { DialogHeader, DialogFooter, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "@/services/api";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useState } from "react";
import { useToast } from "./ui/use-toast";



export default function Header() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [ dialogOpen, setDialogOpen ] = useState(false)
  const { toast } = useToast()

  const formSchema = z.object({
    password: z.string().min(6).max(12),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { password } = values
    try {
      const response = await api.put("users/change/my/password",{
        password
      });
      const { message } = response.data;
      console.log(message)
      form.reset()
      setDialogOpen(false)
      toast({ description: "Senha atualizada"})
    }catch(err) {
      toast({ description: "Não foi possível trocar a senha"})
      form.reset()
      throw new Error("Não foi possível trocar a senha");
    }
  }

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  return (
    <div className="flex items-center justify-between px-8 h-16 border-solid border-b border-b-zinc-400">
      <div className='flex items-center gap-5'>
        <img src={logo} alt="" className='rounded-full size-7'  />
        <span className='font-bold text-2xl'>Hakuna Matata</span>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{user.name}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuGroup>
              <DialogTrigger asChild>
              <DropdownMenuItem>
                Trocar senha
              </DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem onClick={handleSignOut}>Sair</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[425px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Troca de senha</DialogTitle>
              <DialogDescription>
                Digite a nova senha com no mínimo 6 digitos e o máximo de 12 digitos.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField 
                control={form.control}
                name="password"
                render={({field})=> (
                  <FormItem>
                    <FormLabel>Nova senha</FormLabel>
                    <FormControl>
                       <Input placeholder="Digite a nova senha" type="password" {...field} />
                    </FormControl>
                    <FormDescription>
                    Digite a nova senha com no mínimo 6 digitos e o máximo de 12 digitos.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
                            
            </div>
            <DialogFooter>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

        
        
    </div>
  )
}