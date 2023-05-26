import Feed from '@/components/common/Feed';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center orange_gradient">
        Discover & Share
        <br />
        <span className="red_gradient">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is a community of writers and artists who use AI to generate
        prompts for their work. We use the OpenAI GPT-4 API to generate prompts
      </p>

      <Feed />
    </section>
  );
}
