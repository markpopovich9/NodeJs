const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const tag = await prisma.tag.create({
    data: { name: "seed-tag" },
  });


  const post = await prisma.post.create({
    data: {
      title: "Seed post",
      content: "This post was created by seed script.",
    },
  });

  await prisma.postTag.create({
    data: {
      postId: post.id,
      tagId: tag.id,
    },
  });
}