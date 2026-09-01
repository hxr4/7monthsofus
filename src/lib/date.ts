export const anniversaryStart = new Date(2026, 1, 1)

export function getAnniversaryElapsed(now: Date) {
  let cursor = new Date(anniversaryStart)
  let months = 0

  while (true) {
    const next = new Date(cursor)
    next.setMonth(next.getMonth() + 1)
    if (next > now) break
    cursor = next
    months += 1
  }

  const totalDays = Math.floor((now.getTime() - anniversaryStart.getTime()) / 86_400_000)
  const days = Math.floor((now.getTime() - cursor.getTime()) / 86_400_000)
  const hours = now.getHours() - cursor.getHours() < 0 ? now.getHours() - cursor.getHours() + 24 : now.getHours() - cursor.getHours()
  const minutes = now.getMinutes() - cursor.getMinutes() < 0 ? now.getMinutes() - cursor.getMinutes() + 60 : now.getMinutes() - cursor.getMinutes()
  const seconds = now.getSeconds() - cursor.getSeconds() < 0 ? now.getSeconds() - cursor.getSeconds() + 60 : now.getSeconds() - cursor.getSeconds()

  return { months, totalDays, days, hours, minutes, seconds }
}

export function getElapsedLabel(now: Date) {
  const elapsed = getAnniversaryElapsed(now)
  return `${elapsed.months} months · ${elapsed.days} days · ${elapsed.hours}h ${elapsed.minutes}m ${elapsed.seconds}s`
}
