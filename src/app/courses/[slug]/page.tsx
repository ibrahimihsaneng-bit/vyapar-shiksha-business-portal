import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getCourseBySlug, allCourses } from '@/data/courses';
import { getCareerBySlug } from '@/data/careers';
import CourseLearningClient from './CourseLearningClient';

export function generateStaticParams() {
  return allCourses.map((c) => ({ slug: c.careerSlug }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const career = getCareerBySlug(course.careerSlug);

  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading course curriculum...</div>}>
      <CourseLearningClient course={course} career={career} />
    </Suspense>
  );
}
