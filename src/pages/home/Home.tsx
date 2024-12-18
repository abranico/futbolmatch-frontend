import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Search, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Futbol Match</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/login" className="hover:underline">
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:underline">
                  Registrarse
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Encuentra tu partido perfecto
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Únete a equipos, organiza partidos y disfruta del fútbol como nunca
            antes.
          </p>
          <Button size="lg" asChild>
            <Link to="/register">Comienza Ahora</Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Search className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Busca Partidos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Encuentra partidos disponibles en tu área y únete a la
                diversión.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Crea tu Equipo</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Forma tu propio equipo o únete a uno existente y compite juntos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Calendar className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Organiza Partidos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Crea y gestiona tus propios partidos, elige fecha, hora y lugar.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Trophy className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Crea Ligas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Usuarios premium pueden crear y gestionar sus propias ligas de
                fútbol.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para jugar?</h3>
          <p className="mb-6">
            Únete a nuestra comunidad y empieza a disfrutar del fútbol hoy
            mismo.
          </p>
          <div className="space-x-4">
            <Button variant="default" asChild>
              <Link to="/register">Registrarse</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-muted mt-12">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <p>&copy; 2023 Futbol Match. Todos los derechos reservados.</p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/about" className="hover:underline">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacidad
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Home;
