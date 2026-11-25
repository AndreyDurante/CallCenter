import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog"

function LoginButton() {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const dados = Object.fromEntries(formData.entries())

    console.log("Dados do formulário:", dados)
  }

  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="min-h-11 rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 sm:px-4 sm:text-base"
          >
            Login
          </button>
        }
      />

      <DialogContent className= "">
        <DialogHeader>
          <DialogTitle>Entrar na sua conta</DialogTitle>
          <DialogDescription>
            Informe seu e-mail e sua senha para fazer login.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="login-email" className="text-sm font-medium">
              E-mail
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              required
              className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="login-password" className="text-sm font-medium">
              Senha
            </label>
            <input
              id="login-password"
              name="senha"
              type="password"
              autoComplete="current-password"
              placeholder="Digite sua senha"
              required
              className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
            />
          </div>

          <button
            type="submit"
            className="mt-2 h-10 rounded-md bg-blue-800 px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Entrar
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default LoginButton
