import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ServicesLoading() {
  return (
    <main>
      {/* Hero Section Skeleton */}
      <section className="relative bg-primary text-white">
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-5/6 mb-8" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-40 rounded-full" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <Skeleton className="h-10 w-10 mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section Skeleton */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="mb-8 border-b border-gray-200 pb-8 last:border-b-0">
                <div className="flex items-start">
                  <Skeleton className="h-8 w-8 mr-4 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certification Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row">
              <Skeleton className="h-20 w-20 rounded mb-6 md:mb-0 md:mr-6" />
              <div className="flex-1">
                <Skeleton className="h-7 w-64 mb-3" />
                <Skeleton className="h-5 w-full max-w-lg mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-5 w-40" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section Skeleton */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-b-0">
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section Skeleton */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-4 bg-white bg-opacity-20" />
            <Skeleton className="h-5 w-full max-w-xl mx-auto mb-8 bg-white bg-opacity-20" />
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-40 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}