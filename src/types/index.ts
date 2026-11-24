export interface PrizeItem {
  place: string;
  rank: number;
  title: string;
  amount: string;
  amountNumber: number;
  badge: string;
  tagline: string;
  accent: 'gold' | 'silver' | 'bronze';
  perks: string[];
}

export interface TimelineEvent {
  phaseNumber: string;
  title: string;
  date: string;
  time: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed' | 'editable';
  badge: string;
  highlightType?: 'live-registration' | 'challenge-24h' | 'finale' | 'standard';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Payment' | 'Participation' | 'Submissions';
}

export interface SocialImpactFocusArea {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  impactGoal: string;
  image: string;
}

export interface SocialGoodTrack {
  id: string;
  number: string;
  title: string;
  description: string;
  techFocus: string;
  communityImpact: string;
}

export interface FinancialBreakdownItem {
  item: string;
  share: string;
  description: string;
}

export interface NgoInitiativeItem {
  title: string;
  category: string;
  description: string;
  stat?: string;
}

export interface NgoLeaderItem {
  name: string;
  role: string;
  focusArea: string;
}
