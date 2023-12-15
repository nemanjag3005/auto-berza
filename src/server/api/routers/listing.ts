import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const getListingByIdInput = z.object({
  id: z.string(),
});

export const listingRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  //   create: protectedProcedure
  //     .input(z.object({ name: z.string().min(1) }))
  //     .mutation(async ({ ctx, input }) => {
  //       // simulate a slow db call
  //       await new Promise((resolve) => setTimeout(resolve, 1000));

  //       return ctx.db.listing.create({
  //         data: {
  //           transmissionDesc: input.name,
  //           createdBy: { connect: { id: ctx.session.user.id } },
  //         },
  //       });
  //     }),

  getListingById: protectedProcedure
    .input(getListingByIdInput)
    .query(({ ctx, input }) => {
      return ctx.db.listing.findUnique({
        where: { id: input.id },
        include: {
          images: true, // Include related images if needed
        },
      });
    }),

  getListings: protectedProcedure.query(({ ctx }) => {
    return ctx.db.listing.findMany({
      orderBy: { startTime: "desc" },
      include: {
        images: true, // Include the related images
      },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
