import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useQueryParams<T = {}>() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const queryParams = searchParams as unknown as Partial<T>;
    const urlSearchParams = new URLSearchParams(searchParams);
  
    function setQueryParams(params: Partial<T>) {
      Object.entries(params).forEach(([key, value]) => {
        urlSearchParams.set(key, String(value));
      });
  
      const search = urlSearchParams.toString();
      const query = search ? `?${search}` : "";
  
      router.push(`${pathname}${query}`);
    }
  
    return { queryParams, setQueryParams };
  }