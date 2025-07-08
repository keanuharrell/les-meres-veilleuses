"use client";

import { useState } from "react";
import { Heart, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DonPage() {
  const [amount, setAmount] = useState<string>("50");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [loading, setLoading] = useState(false);

  const presetAmounts = ["20", "50", "100", "200"];

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100, // Convert to cents
          frequency,
        }),
      });

      const { clientSecret } = await response.json();
      
      // Redirect to Stripe Checkout or handle payment
      // This would typically redirect to Stripe's hosted checkout
      console.log('Payment intent created:', clientSecret);
      
    } catch (error) {
      console.error('Error creating payment intent:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-4xl py-16 px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Faire un don
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Soutenez Notre Mission
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Votre don nous aide à financer notre participation au Raid Amazones et à soutenir 
            la recherche contre les cancers du sang. Chaque euro compte dans notre combat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="order-2 md:order-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-accent" />
                Pourquoi votre don est important
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Financement du Raid</h3>
                  <p className="text-sm text-muted-foreground">
                    Participation, équipement, transport vers l'Amazonie
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Recherche Médicale</h3>
                  <p className="text-sm text-muted-foreground">
                    Soutien aux associations de lutte contre les cancers du sang
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Sensibilisation</h3>
                  <p className="text-sm text-muted-foreground">
                    Actions de prévention et d'information auprès du public
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="order-1 md:order-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Formulaire de don
              </CardTitle>
              <CardDescription>
                Paiement sécurisé via Stripe • Reçu fiscal automatique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDonation} className="space-y-6">
                <div>
                  <Label htmlFor="amount">Montant du don (€)</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2 mb-4">
                    {presetAmounts.map((preset) => (
                      <Button
                        key={preset}
                        type="button"
                        variant={amount === preset ? "default" : "outline"}
                        size="sm"
                        onClick={() => setAmount(preset)}
                        className="h-8"
                      >
                        {preset}€
                      </Button>
                    ))}
                  </div>
                  <Input
                    id="amount"
                    type="number"
                    min="5"
                    step="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Montant personnalisé"
                  />
                </div>

                <div>
                  <Label>Fréquence</Label>
                  <RadioGroup 
                    value={frequency} 
                    onValueChange={(value: "once" | "monthly") => setFrequency(value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="once" id="once" />
                      <Label htmlFor="once">Don unique</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Don mensuel</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" placeholder="Jean" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" placeholder="Dupont" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jean@example.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input id="address" placeholder="123 rue de la Paix" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" placeholder="Paris" required />
                    </div>
                    <div>
                      <Label htmlFor="postal">Code postal</Label>
                      <Input id="postal" placeholder="75001" required />
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Montant du don</span>
                    <span className="font-semibold">{amount}€</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Réduction fiscale (66%)</span>
                    <span className="font-semibold text-green-600">
                      -{(parseFloat(amount) * 0.66).toFixed(2)}€
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                    <span className="text-sm font-medium">Coût réel</span>
                    <span className="font-bold text-primary">
                      {(parseFloat(amount) * 0.34).toFixed(2)}€
                    </span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Traitement..." : `Faire un don de ${amount}€`}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                🔒 Paiement 100% sécurisé • Reçu fiscal automatique par email • 
                Déduction fiscale de 66% du montant de votre don
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}