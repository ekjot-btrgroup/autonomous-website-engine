export default function MinimalFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-neutral-500">© 2026 Northline Studio. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-neutral-600"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Instagram</a></div>
      </div>
    </footer>
  );
}
