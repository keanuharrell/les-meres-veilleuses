import { Users, Heart, Target, Calendar, Globe, Star, HandHeart, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ValeursPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Charte de valeurs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Nos Valeurs
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              L&apos;association Les Mères Veilleuses est née d&apos;un élan du cœur : celui de faire rayonner, à travers le sport solidaire, des valeurs qui rassemblent. Elle porte l&apos;étincelle de celles qui nous ont précédées et qui brillent encore dans nos souvenirs. À chaque foulée, à chaque sourire partagé, une mémoire s&apos;éveille, une promesse prend vie.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mb-16">
            <CardContent className="p-8 text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Nos engagements communs</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nos engagements communs reposent sur les valeurs suivantes, qui guident chacune 
                de nos actions et créent l&apos;âme de notre association.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-8 mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <HandHeart className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🤝 Solidarité</CardTitle>
                    <CardDescription>Le lien qui nous unit</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous croyons en la puissance du collectif. Chaque Mère Veilleuse est invitée à tendre la main, à accompagner l&apos;autre dans les épreuves comme dans les victoires. Ensemble, nous formons une chaîne d&apos;entraide où chacune est un maillon précieux. Nos actions s&apos;inscrivent dans le réel, mais s&apos;élèvent aussi vers l&apos;humain, vers ce qui dépasse nos propres histoires.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🌸 Sororité et bienveillance</CardTitle>
                    <CardDescription>Des étoiles au creux des cœurs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ici, chaque femme est accueillie sans masque ni armure. Nos fragilités deviennent des forces dès lors qu&apos;elles sont reconnues, respectées, entourées. Nous veillons les unes sur les autres comme on protège une flamme dans le vent. Nos différences tissent un ciel commun, constellé de respect et de tendresse.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">💪 Courage et dépassement de soi</CardTitle>
                    <CardDescription>L&apos;audace de se transformer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Le sport est notre terrain d&apos;aventure, mais aussi de métamorphose. Il nous invite à dépasser nos limites, à découvrir des forces insoupçonnées. Nos pas foulent la terre avec détermination, mais nos élans portent aussi l&apos;éclat d&apos;un chemin intérieur. Chaque défi est une promesse de confiance retrouvée.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🎗️ Mémoire et engagement</CardTitle>
                    <CardDescription>En hommage à celles qui brillent ailleurs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Certaines ne sont plus là, mais leur lumière nous guide encore. Par nos pas, nos dons, nos élans, nous honorons leur mémoire. Notre engagement pour la lutte contre les cancers du sang est un acte d&apos;amour et de continuité. Chaque geste posé est une étoile de plus dans le ciel que nous partageons.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🌍 Ouverture et inclusion</CardTitle>
                    <CardDescription>Une place pour chaque voix</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quelles que soient nos origines, notre âge, notre condition ou notre histoire, nous avons toutes une place ici. Les Mères Veilleuses est un refuge ouvert, une aventure collective qui se construit dans l&apos;inclusion, le respect et le lien social. Chacune y apporte sa nuance, son souffle, son tempo.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">🛡️ Notre engagement</CardTitle>
              <CardDescription>
                Une promesse partagée
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Rejoindre Les Mères Veilleuses, c&apos;est bien plus qu&apos;adhérer : c&apos;est choisir de faire vivre chaque jour ces valeurs, dans les gestes les plus simples comme dans les élans les plus forts.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Ces engagements sont les battements du cœur de notre association, les fils invisibles qui relient nos pas et nos âmes. Ensemble, nous tissons un monde où l&apos;humain est au centre.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <a href="/contact">
                      <Users className="mr-2 h-5 w-5" />
                      Nous rejoindre
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/association">
                      <Heart className="mr-2 h-5 w-5" />
                      Découvrir l&apos;association
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}