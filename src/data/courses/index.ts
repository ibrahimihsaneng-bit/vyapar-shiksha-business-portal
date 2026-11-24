import { Course } from '@/types';
import { virtualAssistantCourse } from './course-va';
import { ecommerceOperationsCourse } from './course-ecom';
import { excelDataCourse } from './course-excel';
import { customerChatCourse } from './course-chat';
import { bookkeepingCourse } from './course-bookkeeping';
import { crmDataCourse } from './course-crm';
import { documentFormattingCourse } from './course-doc';
import { webResearchCourse } from './course-research';
import { canvaDesignCourse } from './course-canva';
import { wordpressManagerCourse } from './course-wp';

export const allCourses: Course[] = [
  bookkeepingCourse,
  virtualAssistantCourse,
  ecommerceOperationsCourse,
  excelDataCourse,
  customerChatCourse,
  crmDataCourse,
  documentFormattingCourse,
  webResearchCourse,
  canvaDesignCourse,
  wordpressManagerCourse,
];

export const coursesBySlug: Record<string, Course> = allCourses.reduce(
  (acc, course) => {
    acc[course.careerSlug] = course;
    return acc;
  },
  {} as Record<string, Course>
);

export const coursesById: Record<string, Course> = allCourses.reduce(
  (acc, course) => {
    acc[course.id] = course;
    return acc;
  },
  {} as Record<string, Course>
);

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesBySlug[slug];
}

export function getCourseById(id: string): Course | undefined {
  return coursesById[id];
}
