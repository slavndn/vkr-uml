import { RecordStatus, Role } from "./enums";
import type { BetterDirection, ISODate, ISODateTime, UUID } from "./types";

export interface User {
  id: UUID;
  email: string;
  fullName: string;
  role: Role;
  isActive: boolean;
  createdAt: ISODateTime;
}

export interface School {
  id: UUID;
  name: string;
  address: string;
}

export interface ClassGroup {
  id: UUID;
  schoolId: UUID;
  name: string; // например, "7А"
  year: number;
}

export interface StudentProfile {
  id: UUID;
  studentId: UUID; // User.id
  schoolId: UUID;
  classGroupId: UUID;
  dateOfBirth: ISODate;
  medicalGroup: string;
}

export interface TeacherProfile {
  id: UUID;
  teacherId: UUID; // User.id
  schoolId: UUID;
  position: string;
}

export interface Sport {
  id: UUID;
  name: string;
}

export interface Metric {
  id: UUID;
  name: string; // например, "Бег 30м"
  unit: string; // сек, м, раз и т.п.
  betterDirection: BetterDirection;
  sportId?: UUID;
}

export interface Normative {
  id: UUID;
  metricId: UUID;
  ageFrom: number;
  ageTo: number;
  gender: string; // "M" | "F" | "Any" (можно уточнить в реализации)
  targetValue: number;
}

export interface Lesson {
  id: UUID;
  teacherId: UUID; // TeacherProfile.teacherId
  classGroupId: UUID;
  date: ISODate;
  topic: string;
}

export interface AchievementRecord {
  id: UUID;
  studentId: UUID; // StudentProfile.studentId
  createdByTeacherId: UUID; // TeacherProfile.teacherId
  lessonId?: UUID;
  sportId?: UUID;
  metricId: UUID;
  value: number;
  status: RecordStatus;
  recordedAt: ISODateTime;
  comment?: string;
}
