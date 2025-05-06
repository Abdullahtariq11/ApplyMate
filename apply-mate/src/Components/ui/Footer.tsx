import React from 'react'

function Footer() {
  return (
    <section className="bg-gray-100 border-t border-gray-200 text-gray-600 py-8">
  <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="text-lg font-semibold">ApplyMate</div>
    <div className="flex gap-6 text-sm">
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Terms</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>
    <div className="text-xs">© 2025 ApplyMate. All rights reserved.</div>
  </div>
</section>
  )
}

export default Footer