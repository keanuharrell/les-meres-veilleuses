import { Star, Heart, Users, Calendar, Quote } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HistoirePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Notre histoire
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Une naissance du cœur
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cette association est née d&apos;un manque, d&apos;une douleur, d&apos;un vide laissé par Magali, 
              notre amie, emportée par un lymphome. Découvrez comment nous avons transformé 
              ce chagrin en lumière et en espoir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 mb-12">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-2xl">Lettre fondatrice Les Mères Veilleuses</CardTitle>
              <CardDescription>
                L&apos;origine de notre association : pourquoi l&apos;idée est venue
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-4xl mx-auto">
                <Quote className="h-8 w-8 text-accent mx-auto mb-6" />
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Cette association est aussi née d&apos;un manque, d&apos;une douleur, d&apos;un vide laissé par Magali, 
                  notre amie, emportée par un lymphome. Son départ brutal, trop tôt, trop injuste, 
                  a bouleversé nos vies. Mais plutôt que de laisser ce chagrin s&apos;éteindre dans le silence, 
                  nous avons voulu y répondre par un geste vivant, concret, tendre et fort à la fois.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Nous avons voulu que ce moment douloureux, ce déchirement, ne soit pas vain. 
                  Que la mémoire de Magali, et de toutes les mères, sœurs, femmes parties trop tôt, 
                  se transforme en lumière. C&apos;est pour elles que nous avons voulu créer du lien, 
                  du réconfort, de l&apos;espoir.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Les Mères Veilleuses sont ces mamans, là-haut, qui veillent encore. Et nous, ici, 
                  nous prolongeons cette veille à travers les actions de l&apos;association. Ce projet 
                  est une manière de dire : tu n&apos;es plus là, mais tu continues d&apos;agir à travers nous.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  De faire en sorte que la perte devienne un élan, un engagement, une chaîne d&apos;entraide 
                  qui ne s&apos;éteint pas. Magali est notre étoile, mais elle est aussi notre point de départ.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mb-12">
            <CardHeader className="text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">🌟 5 juillet – Un jour de mémoire, un jour de naissance</CardTitle>
              <CardDescription>
                La création de l&apos;association : le jour où tout a commencé
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-4xl mx-auto">
                <Quote className="h-8 w-8 text-primary mx-auto mb-6" />
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Ce jour du 5 juillet, nous le dédions à Victoria. Fille de Magali, notre amie, 
                  notre sœur de cœur, notre étoile. Aujourd&apos;hui, elle a 10 ans. Un âge où tout 
                  commence à se dessiner. Aujourd&apos;hui aussi, nous faisons naître un projet qui, 
                  comme elle, portera les empreintes de Magali : sa lumière, sa bienveillance, 
                  son écoute, son grand courage.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Nous créons cette association comme on allume une veilleuse dans la nuit. 
                  Pour veiller sur d&apos;autres femmes, pour tendre la main, pour rassembler. 
                  Pour dire que nous ne sommes pas seules. Que même dans l&apos;absence, l&apos;amour 
                  continue d&apos;agir.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Nous avançons avec ce que Magali nous a transmis, sans bruit mais avec force : 
                  l&apos;élan d&apos;aider, la beauté du lien, la puissance de la sororité.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Ce 5 juillet n&apos;est plus seulement un anniversaire. C&apos;est désormais une promesse. 
                  Celle de continuer, à notre manière, à veiller. À transmettre. À aimer. 
                  Une date doublement symbolique : celle de la mémoire et celle du commencement. 
                  Un trait d&apos;union entre l&apos;héritage que nous portons et l&apos;avenir que nous voulons construire.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Nous créons « Les Mères Veilleuses » comme un phare, une veilleuse allumée dans 
                  la nuit, un geste tendre et fort à la fois.
                </p>
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-base italic text-muted-foreground">
                    Pour Magali. Pour Victoria. Pour toutes celles qui marcheront à nos côtés. 
                    Pour celles que la vie cabosse, pour celles qui osent recommencer. 
                    Pour celles qui veillent, et celles qui sont veillées.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader className="text-center">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-2xl">Magali, notre étoile</CardTitle>
              <CardDescription>
                Elle était cette personne lumineuse qui illuminait chaque pièce où elle entrait
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Magali est notre étoile, mais elle est aussi notre point de départ. 
                  Ce projet est une manière de dire : tu n&apos;es plus là, mais tu continues 
                  d&apos;agir à travers nous. De faire en sorte que la perte devienne un élan, 
                  un engagement, une chaîne d&apos;entraide qui ne s&apos;éteint pas.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Mère dévouée, elle veillait sur sa fille avec une tendresse infinie. 
                  Son sourire, sa générosité nous inspirent encore aujourd&apos;hui et 
                  continueront de guider chacune de nos actions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">L&apos;équipe fondatrice</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                Nous sommes trois femmes unies par l&apos;amitié et animées par la même volonté 
                de faire de notre douleur une force au service des autres.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center space-y-3">
                  <div className="h-24 w-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold">Présidente</h3>
                  <p className="text-sm text-muted-foreground">
                    Porte la vision et coordonne nos actions
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="h-24 w-24 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                    <Heart className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-semibold">Trésorière</h3>
                  <p className="text-sm text-muted-foreground">
                    Gère les finances et assure la transparence
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="h-24 w-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <Star className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold">Secrétaire</h3>
                  <p className="text-sm text-muted-foreground">
                    Organise et communique sur nos activités
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/contact">
                    Nous rejoindre
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