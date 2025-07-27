import { Target, Users, Heart, Award, ArrowRight, MessageCircle, DollarSign, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AssociationPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              🟣 Nos actions concrètes
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comment nous mettons en œuvre notre mission au quotidien
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg">
              <Award className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">🏃 Participation sportive</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Parce que chaque pas, chaque coup de rame ou de pédale peut porter un message d&apos;espoir, nous participons au RAID AMAZONES – un raid multisport 100 % féminin et solidaire – ainsi qu&apos;à d&apos;autres événements sportifs ouverts aux femmes et porteurs de sens.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-accent/5 rounded-lg">
              <MessageCircle className="h-8 w-8 text-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">💬 Communication et sensibilisation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous faisons entendre notre voix en organisant des actions autour des cancers du sang : sensibilisation, diffusion d&apos;informations fiables, mobilisation via les réseaux, les médias ou les rencontres de terrain. Chaque mot compte.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg">
              <DollarSign className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">🤝 Soutien financier</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lorsque cela est possible, une part de nos excédents est reversée à une structure d&apos;utilité publique qui œuvre dans le domaine des cancers du sang. Parce qu&apos;aider les autres, c&apos;est prolonger la veille.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 mt-12">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-4" />
                <CardTitle>🎯 Notre objectif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Créer une chaîne d&apos;élan, de force, de cœur. Rassembler autour d&apos;une cause qui nous dépasse. Inciter chacun·e à devenir un maillon actif dans le soutien à la recherche, à la prévention et à l&apos;accompagnement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-8 w-8 text-accent mb-4" />
                <CardTitle>🔧 Fonctionnement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Les Mères Veilleuses reposent sur l&apos;engagement de femmes bénévoles, déterminées à faire une différence. Chaque euro, chaque action, chaque sourire est un levier pour faire avancer les choses.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">🌟 Rejoignez notre mission</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                Vous pouvez marcher avec nous de bien des façons : en participant à nos défis, en parlant de nous, en soutenant nos actions. Votre lumière, si petite soit-elle, éclaire notre route.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/don">
                    <Heart className="mr-2 h-5 w-5" />
                    Faire un don
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/contact">
                    <Users className="mr-2 h-5 w-5" />
                    Nous rejoindre
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/raid">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Suivre le Raid
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}