type Props = {
  name: string;
  expiresIn: string | null;
};

export function ApiKeyNameCell({ name, expiresIn }: Props) {
  return (
    <div className="flex-column font-medium">
      {name}
      {expiresIn != null ? (
        <div className="font-normal text-red-600">{expiresIn}</div>
      ) : null}
    </div>
  );
}
