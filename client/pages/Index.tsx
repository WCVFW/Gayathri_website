// import { Button } from '@/components/ui/button';
// // import { Card} from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// // import { Link } from 'react-router-dom';
// import {
//   // Calculator,
//   // FileText,
//   // TrendingUp, CardContent, CardDescription, CardHeader, CardTitle
//   // Shield,
//   // Users,
//   Award,
//   CheckCircle,
//   // ArrowRight,
//   Phone,
//   // Mail,
//   Calendar,
//   // BarChart3,
//   // PieChart,
//   // Receipt,
//   // Briefcase,
//   // DollarSign,
// } from 'lucide-react';
import PopularServices from "./PopularServices"
import HeroSection from './HeroSection';

export function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PopularServices />
    </div>
  );
}
