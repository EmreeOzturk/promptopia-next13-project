import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }: any) => {
  return (
    <section className="w-full max-w-full flex-start flex-col  mb-20">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="mt-10 max-w-md desc text-left">
        {type} a prompt to share with the community and get feedback from the
        community. You can also add a tag to your prompt to make it easier to be
        found.
      </p>

      <form
        className="flex flex-col mt-10 w-full max-w-2xl glassmorphism gap-7"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Prompt <span className="text-red-600">*</span>
          </span>

          <textarea
            className="form_textarea !mt-6"
            required
            placeholder="Write your prompt here..."
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="text-red-600">* </span>
            <span className="font-normal">
              (#product, #webdevelop, #ai, #idea )
            </span>
          </span>

          <input
            className="form_input !mt-6"
            required
            placeholder="#tag"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link className="text-sm text-gray-500 hover:text-black" href="/">
            Cancel
          </Link>
          <button type="submit" className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
