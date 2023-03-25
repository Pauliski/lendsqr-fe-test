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
  socials: SocialsInterface
}

export interface TablePaginationInterface{
    pageNumber: number;
    limit?: number
}
export interface TablePaginatorInterface {
  handleLimit: (limit: number) => void;
  handlepage: (pageNumber: number) => void;
  dataCount: number;
  pageNumber: number;
  limit: number;
}