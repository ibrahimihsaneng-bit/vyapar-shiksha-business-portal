'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Filter,
  Layers,
  TrendingUp,
  Clock,
  Compass,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  X,
  Bookmark,
  BookmarkCheck,
  Award,
  Globe,
  SlidersHorizontal
} from 'lucide-react';
import { allCareers } from '@/data/careers';
import { careerCategories } from '@/data/categories';
import { DurationTrack } from '@/types';

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRemote, setSelectedRemote] = useState<string>('all');
  const [savedCareers, setSavedCareers] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('saved_careers');
      if (stored) {
        setSavedCareers(JSON.parse(stored));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleSaveCareer = (slug: string) => {
    const updated = savedCareers.includes(slug)
      ? savedCareers.filter(s => s !== slug)
      : [...savedCareers, slug];
    setSavedCareers(updated);
    try {
      localStorage.setItem('saved_careers', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const filteredCareers = useMemo(() => {
    return allCareers.filter((c) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesTitleMl = c.titleMl ? c.titleMl.toLowerCase().includes(q) : false;
        const matchesOverview = c.overview.toLowerCase().includes(q);
        const matchesTools = c.toolsRequired.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesTitleMl && !matchesOverview && !matchesTools) {
          return false;
        }
      }

      // Track
      if (selectedTrack !== 'all' && c.durationTrack !== selectedTrack) {
        return false;
      }

      // Category
      if (selectedCategory !== 'all' && c.category !== selectedCategory) {
        return false;
      }

      // Remote
      if (selectedRemote !== 'all' && c.remotePotential !== selectedRemote) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedTrack, selectedCategory, selectedRemote]);

  const hasActiveFilters = searchQuery !== '' || selectedTrack !== 'all' || selectedCategory !== 'all' || selectedRemote !== 'all';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTrack('all');
    setSelectedCategory('all');
    setSelectedRemote('all');
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/60">
          <Compass className="w-3.5 h-3.5 text-teal-600" />
          <span>Full Directory &bull; 40 Practical Beginner Pathways</span>
          <span className="px-1.5 py-0.2 rounded bg-emerald-700 text-white text-[10px] font-bold">
            മലയാളം
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Explore All Career Pathways
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          From quick 30-day operational roles to in-depth 120-day engineering careers. Every single pathway includes verified salary data, software masteries, hands-on tasks, and a zero-experience entry roadmap.
        </p>
      </div>

      {/* Quick Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All Categories ({allCareers.length})
        </button>
        {careerCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(selectedCategory === cat.name ? 'all' : cat.name)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === cat.name
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by job title, software (Excel, Zoho, Shopify, Canva, React) or മലയാളം keywords..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-sm placeholder:text-slate-400"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
          {/* Duration Track */}
          <div>
            <label className="block font-bold text-slate-700 mb-1.5">Preparation Timeline</label>
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            >
              <option value="all">All Tracks (30 - 120 Days)</option>
              <option value="30-days">30-Day Fast Track (10 Careers)</option>
              <option value="60-days">60-Day Foundation (10 Careers)</option>
              <option value="90-days">90-Day Professional (10 Careers)</option>
              <option value="120-days">120-Day Advanced (10 Careers)</option>
            </select>
          </div>

          {/* Industry Category */}
          <div>
            <label className="block font-bold text-slate-700 mb-1.5">Industry Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            >
              <option value="all">All Categories</option>
              {careerCategories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Remote Availability */}
          <div>
            <label className="block font-bold text-slate-700 mb-1.5">Remote Availability</label>
            <select
              value={selectedRemote}
              onChange={(e) => setSelectedRemote(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            >
              <option value="all">All Work Modes</option>
              <option value="High">High (Work from Home / Remote Friendly)</option>
              <option value="Medium">Medium (Hybrid & In-Office Options)</option>
              <option value="Low">Low (On-Site Office Required)</option>
            </select>
          </div>
        </div>

        {/* Filter Stats & Reset */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-800">{filteredCareers.length}</strong> of {allCareers.length} Careers
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-800 font-bold"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Careers Grid with SVG Thumbnails & Save Action */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => {
          const isSaved = savedCareers.includes(career.slug);
          return (
            <div
              key={career.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden card-hover-lift flex flex-col justify-between"
            >
              {/* Thumbnail Header */}
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                <Image
                  src={`/images/thumbnails/thumb-${career.slug}.svg`}
                  alt={career.title}
                  width={400}
                  height={180}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                    {career.category}
                  </span>
                </div>
                {/* Save Bookmark Button */}
                <button
                  onClick={() => toggleSaveCareer(career.slug)}
                  title={isSaved ? 'Remove from saved' : 'Save career'}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-xs backdrop-blur-xs transition-colors"
                >
                  {isSaved ? (
                    <BookmarkCheck className="w-4 h-4 text-teal-600 fill-teal-600" />
                  ) : (
                    <Bookmark className="w-4 h-4 text-slate-600" />
                  )}
                </button>
                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                    Remote: {career.remotePotential}
                  </span>
                </div>
                <div className="absolute bottom-2 right-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/90 text-teal-900 font-mono shadow-xs">
                    {career.durationTrack}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 hover:text-teal-800 transition-colors">
                      <Link href={`/careers/${career.slug}`}>
                        {career.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-teal-800 font-semibold mt-0.5">{career.titleMl}</p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {career.overview}
                  </p>
                </div>

                {/* Salary & Software Tools */}
                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                      Entry Monthly:
                    </span>
                    <span className="font-extrabold text-slate-900">
                      ₹{career.salaryRangeInr.entryMin.toLocaleString()} - ₹{career.salaryRangeInr.entryMax.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {career.toolsRequired.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-slate-100/80 flex items-center gap-2 mt-auto">
                <Link
                  href={`/careers/${career.slug}`}
                  className="flex-1 text-center py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Blueprint
                </Link>
                {career.durationTrack === '30-days' ? (
                  <Link
                    href={`/courses/${career.slug}`}
                    className="flex-1 text-center py-2.5 rounded-xl bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 shadow-xs transition-colors"
                  >
                    Start Course
                  </Link>
                ) : (
                  <Link
                    href={`/careers/${career.slug}#roadmap`}
                    className="flex-1 text-center py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    Roadmap
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
