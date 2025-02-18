import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">Product page</h1>
      <Button>Fsw 7.0</Button>
      <Input placeholder="Bora fechar esse projeto!" />
    </div>
  );
};

export default ProductPage;
