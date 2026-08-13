'use client';

import {
  Globe, Smartphone, Code, TrendingUp, Users, Briefcase,
  MonitorCheck, LineChart, Cpu, Cloud, ShieldCheck, Workflow,
  Database, Layers, Zap, Landmark, Truck, ShoppingBag, HeartPulse, Building2, Lock
} from 'lucide-react';

const ICON_MAP = {
  Globe,
  Smartphone,
  Code,
  TrendingUp,
  Users,
  Briefcase,
  MonitorCheck,
  LineChart,
  Cpu,
  Cloud,
  ShieldCheck,
  Workflow,
  Database,
  Layers,
  Zap,
  Landmark,
  Truck,
  ShoppingBag,
  HeartPulse,
  Building2,
  Lock,
};

export default function RenderIcon({ name, className = 'h-5 w-5' }) {
  const Component = ICON_MAP[name] || Globe;
  return <Component className={className} />;
}
