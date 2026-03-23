import React, { useState } from 'react';
import { BookOpen, Zap } from 'lucide-react';
import AuditProgramGenerator from './AuditProgramGenerator';
import KnowledgeBase from './KnowledgeBase';

const App = () => {
  const [currentPage, setCurrentPage] = useState('generator');

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">Audit Program Generator</h1>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('generator')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                currentPage === 'generator'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Generator
            </button>
            <button
              onClick={() => setCurrentPage('knowledge')}
              className={`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
                currentPage === 'knowledge'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Knowledge Base
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'generator' && <AuditProgramGenerator />}
      {currentPage === 'knowledge' && <KnowledgeBase />}
    </div>
  );
};

export default App;
