function Avatar({ name }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white">
      {name?.[0] || 'I'}
    </div>
  );
}

export default Avatar;
