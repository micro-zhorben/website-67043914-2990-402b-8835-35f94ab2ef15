import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="relative overflow-hidden group">
      <CardContent className="p-6 space-y-4">
        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="space-y-2">
          <Typography.H4>{title}</Typography.H4>
          <Typography.Muted>{description}</Typography.Muted>
        </div>
      </CardContent>
    </Card>
  );
}