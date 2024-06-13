type MovieProps = {
  // contains route parameters of the current URL (names must match!!)
  params: { id: string };
};

export default function Movie({ params }: MovieProps) {
  return <div></div>;
}
