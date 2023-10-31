import { Links } from '../../components/links'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Links linkList={['dashboard', 'dashboard/settings']} />
      {children}
    </section>
  )
}
