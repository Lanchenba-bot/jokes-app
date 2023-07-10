import { redirect, type ActionArgs } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { resourceLoader } from "~/controllers/jokes"
import { db } from "~/utils/db.server"
import { requireUserId } from "~/utils/session.server"

export const action = async ({ request, params }: ActionArgs) => {
  const userId = await requireUserId(request)
  const form = await request.formData()
  const content = form.get("comment")
  const jokeId = params.id

  if (form.has("delete-joke")) {
    const jokeToDelete = await db.joke.findFirst({
      where: {
        id: jokeId,
        jokesterId: userId,
      },
    })
    if (jokeToDelete) {
      await db.joke.delete({
        where: {
          id: jokeId,
        },
      })
    }
    return redirect(`/jokes`)
  } else if (form.has("delete-comment")) {
    const commentId = form.get("delete-comment")
    await db.comment.delete({
      where: {
        id: commentId,
      },
    })
    return {}
  } else if (form.has("edit-joke")) {
    const updatedContent = form.get("edit-joke")
    await db.joke.update({
      where: {
        id: jokeId,
      },
      data: {
        content: updatedContent,
      },
    })
    return {}
  } else {
    if (content && content.length > 10) {
      const comment = await db.comment.create({
        data: {
          jokeId,
          content,
          commenterId: userId,
        },
      })
    }
  }
  return {}
}

export const loader = resourceLoader

const JokeRoute = () => {
  const { joke, comments, userId } = useLoaderData<typeof loader>()
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{joke.content}</p>

      <Link to=".">{joke.name}</Link>
      {/* delete-joke section */}
      {userId === joke.jokesterId && (
        <div className="edit-and-delete-jokes">
          <form method="post">
            <button
              type="submit"
              className="delete-button"
              name="delete-joke"
              value={joke.id}>
              delete post
            </button>
          </form>

          {/* edit-joke section */}
          <form method="post" className="edit-joke">
            <div>
              <label>
                Edit Joke:{" "}
                <input
                  name="edit-joke"
                  type="text"
                  defaultValue={joke.content}
                />
              </label>
            </div>
            <button type="submit" className="button">
              update
            </button>
          </form>
        </div>
      )}

      {/* comment section */}
      <form method="post">
        <div>
          <label>
            Comment: <input name="comment" type="text" />
          </label>
        </div>
        <button type="submit" className="button">
          post
        </button>
     
      </form>

      {comments.length !== 0 && (
        <div
          className="commentbox"
          style={{ overflowY: "scroll", maxHeight: "500px" }}>
          <p>Comments</p>
          {comments.map(
            (comment, index) =>
              comment.content.length !== 0 && (
                <div key={index} className="comments">
                  <span>{comment.jokester.username} </span>
                  <p>{comment.content}</p>
                  <div className="delete-comment-section">
                    {userId === comment.commenterId && (
                      <form method="post" className="comment-form">
                        <button
                          type="submit"
                          className="delete-button-comment"
                          name="delete-comment"
                          value={comment.id}>
                          delete
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  )
}

export default JokeRoute
