const mapping: Record<string, string> = {
  assignments: 'assignment',
  courses: 'course',
  grades: 'grade',
  organizations: 'organization',
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
