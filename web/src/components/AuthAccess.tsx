export default function AuthComponent({
  isAuthenticated,
}: {
  isAuthenticated?: boolean;
}) {
  return (
    <div className="bg-orange">
      <h1 className="text-center">Auth Component</h1>
    </div>
  );
}
