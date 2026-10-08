import { hours } from "@/lib/site";

export function HoursTable({ tone = "plain" }: { tone?: "plain" | "inverse" }) {
  return (
    <table className={tone === "inverse" ? "hours" : "hours hours-plain"}>
      <caption className="eyebrow" style={tone === "inverse" ? { color: "#d5deea", textAlign: "left" } : { textAlign: "left" }}>
        Business hours
      </caption>
      <tbody>
        {hours.map(([day, time]) => (
          <tr key={day}>
            <th scope="row">{day}</th>
            <td>{time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
