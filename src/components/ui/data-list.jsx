function DataList({ children }) {
  return (
    <div className="text-start w-full" role="list" aria-label="Data list">
      {children}
    </div>
  );
}

function DataListItem({ children }) {
  return (
    <div className="grid grid-cols-2 space-y-3 gap-2" role="listitem">
      {children}
    </div>
  );
}

function DataListLabel({ children }) {
  return (
    <p className="text-muted-foreground" role="term">
      {children}
    </p>
  );
}

function DataListValue({ children }) {
  return (
    <p role="definition" className="capitalize">
      {children}
    </p>
  );
}

export { DataList, DataListItem, DataListLabel, DataListValue };
