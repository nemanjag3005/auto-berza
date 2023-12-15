import Listing from "~/components/Auctions/Listing";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Auction({ params }: { params: { id: string } }) {
  const session = await getServerAuthSession();
  const listing = await api.listing.getListingById.query({ id: params.id });

  return (
    <>
      <Listing listing={listing} />
    </>
  );
}
