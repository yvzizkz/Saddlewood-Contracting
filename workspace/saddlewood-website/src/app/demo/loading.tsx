import { Skeleton } from '@/components/ui/skeleton';

export default function DemoLoading() {
  return (
    <div className="container-custom py-16">
      <Skeleton className="h-10 w-64 mb-8" />

      <div className="bg-surface-raised p-8 rounded-lg mb-8">
        <Skeleton className="h-6 w-48 mb-4" />
        <Skeleton className="h-4 w-full mb-3" />
        <Skeleton className="h-4 w-full mb-3" />
        <Skeleton className="h-4 w-3/4 mb-6" />

        <Skeleton className="h-4 w-64 mb-3" />

        <div className="pl-6 mb-6">
          <Skeleton className="h-4 w-48 mb-2" />
          <Skeleton className="h-4 w-48 mb-2" />
          <Skeleton className="h-4 w-48 mb-2" />
          <Skeleton className="h-4 w-48 mb-2" />
        </div>

        <Skeleton className="h-5 w-40 mb-2" />
        <div className="pl-6 mb-6">
          <Skeleton className="h-4 w-full max-w-md mb-2" />
          <Skeleton className="h-4 w-full max-w-md mb-2" />
          <Skeleton className="h-4 w-full max-w-md mb-2" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Skeleton className="h-12 w-48 rounded-lg" />
        <Skeleton className="h-12 w-48 rounded-lg" />
      </div>
    </div>
  );
}
