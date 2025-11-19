
function App() {
  return (
    <>
    <div className="h-screen bg-[#FCF6F5] flex-col flex items-center gap-30 text-[#990011]">
      <h1 className="m-4">Formulaire permettant de vérifier si un nombre est premier</h1>
      <div className="gap-4 flex flex-col items-center">
        <p>Utilisation de Zustang, Tanstack Router, Tanstack Query et Tailwindcss</p>
        <p>Fonctionnement :</p>
        <p className="w-[520px]">Soit on génére un nombre aléatoire soit on entre un nombre dans le formulaire, on vérifie que ce nombre est premier, si c'est le cas on affiche le nombre en précisant que c'est un nombre premier sinon on affiche juste que ce n'est pas un nombre premier</p>
      </div>
    </div>
    </>
  )
}

export default App
