import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from "react";

export interface SocialsInterface {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface ProfileInterface {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

export interface GuarantorInterface {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

export interface EducationInterface {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  officeEmail: string;
  monthlyIncome: string[];
  sector: string;
}

export interface UsersInterface {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  email: string;
  education: EducationInterface;
  guarantor: GuarantorInterface;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  userName: string;
  profile: ProfileInterface;
  socials: SocialsInterface;
}

export interface TablePaginationInterface {
  pageNumber: number;
  limit?: number;
}
export interface TablePaginatorInterface {
  handleLimit: (limit: number) => void;
  handlepage: (pageNumber: number) => void;
  dataCount: number;
  pageNumber: number;
  limit: number;
}

export interface RatingSectionProps {
  amount: string;
  profile: ProfileInterface;
  setCurrentDisplay: React.Dispatch<React.SetStateAction<string>>;
}

export interface DetailsMainProps {
  currentDisplay: string;
  user: UsersInterface;
}

export interface FilterSelectInterface {
  orgName: string;
  status: string;
}
export interface FilterProps {
  users: UsersInterface[];
  childFunc: any;
  setFilterBy: Dispatch<SetStateAction<FilterObjectInterface>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  
}

export interface SearchProps {
  hasButton: boolean;
  placeholder: string;
  hasDatalist: boolean;
  listId?: string;
  listArray?: any[];
  filterBy?: string;
  type?: string | "text";
  nested?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: object;
}
export interface FilterObjectInterface {
  organization: string;
  userName: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

export interface NavbarProps {
  openSidebar: ()=>void
}
export interface SidebarProps {
  sidebarIsOpen: boolean
}