export default function getCreditsReceived(credits: number, grade: string) {
  if (grade === "A" || grade === "A*") return credits;
  if (grade === "B+") return 0.9 * credits;
  if (grade === "B") return credits * 0.8;
  if (grade === "C+") return 0.7 * credits;
  if (grade === "C") return credits * 0.6;
  if (grade === "D+") return 0.5 * credits;
  if (grade === "D") return credits * 0.4;
  if (grade === "E") return credits * 0.2;
  if (grade === "F") return 0;
  if (grade === "S") return credits;
  return 0;
}
