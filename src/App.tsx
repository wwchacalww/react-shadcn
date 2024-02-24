import { Label } from '@radix-ui/react-label'
import './App.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {

  return (
    <div className='flex items-center justify-center h-screen h-full w-full mx-auto border-solid border-2 border-zinc-500 '>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Informe seu email e senha de acesso.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="email" type='email' className='rounded-lg' />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" placeholder="senha" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Entrar</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default App
