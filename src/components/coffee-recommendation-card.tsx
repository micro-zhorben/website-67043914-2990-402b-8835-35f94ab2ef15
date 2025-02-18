import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface CoffeeRecommendationProps {
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  price: string;
  imageUrl?: string;
  onOrder?: () => void;
}

export function CoffeeRecommendationCard({
  name,
  description,
  roastLevel,
  origin,
  price,
  imageUrl,
  onOrder,
}: CoffeeRecommendationProps) {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <CardHeader className="relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        ) : (
          <div className="w-full h-48 bg-muted flex items-center justify-center rounded-t-lg">
            <Coffee className="w-16 h-16 text-muted-foreground" />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Typography.H3>{name}</Typography.H3>
            <Typography.Muted>{description}</Typography.Muted>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography.Small className="text-muted-foreground">
                Roast Level
              </Typography.Small>
              <Typography.P>{roastLevel}</Typography.P>
            </div>
            <div>
              <Typography.Small className="text-muted-foreground">
                Origin
              </Typography.Small>
              <Typography.P>{origin}</Typography.P>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Typography.Large className="font-bold">{price}</Typography.Large>
            <Button onClick={onOrder} className="text-primary-foreground">
              Order Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}